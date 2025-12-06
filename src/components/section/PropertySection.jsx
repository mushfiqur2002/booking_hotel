
import CardType2nd from "../CardType2nd"
import { useRef, useState, useEffect, useCallback } from "react";
import { useTypesHotels } from "../../assets/fetchTypesData";

function PropertySection() {
    const data = useTypesHotels();
    const scrollRef = useRef(null);
    const containerRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(3); // Will be calculated dynamically
    const [cardWidth, setCardWidth] = useState(280); // Will be measured dynamically

    // Measure card width and calculate cards per page
    useEffect(() => {
        const updateLayout = () => {
            if (!containerRef.current || !scrollRef.current) return;

            // Get the first card element to measure its actual width
            const cardElements = scrollRef.current.querySelectorAll('.card-container');
            if (cardElements.length > 0) {
                const firstCard = cardElements[0];
                const cardRect = firstCard.getBoundingClientRect();
                const computedStyle = window.getComputedStyle(firstCard);

                // Calculate total card width including margins
                const cardWidth = cardRect.width +
                    parseInt(computedStyle.marginLeft || 0) +
                    parseInt(computedStyle.marginRight || 0);

                setCardWidth(cardWidth);

                // Calculate how many cards fit in the container
                const containerWidth = containerRef.current.clientWidth;
                const gap = 24; // Your gap-6 = 1.5rem = 24px
                const availableWidth = containerWidth + gap; // Add gap for calculation

                // Calculate max cards that can fit
                let calculatedCards = Math.floor(availableWidth / (cardWidth + gap));

                // Ensure at least 1 card and not more than data length
                calculatedCards = Math.max(1, Math.min(calculatedCards, data?.length || 1));

                // For very small screens, show fewer cards
                if (containerWidth < 640) { // sm breakpoint
                    calculatedCards = Math.min(2, calculatedCards);
                }

                setCardsPerPage(calculatedCards);
            }
        };

        // Initial calculation
        updateLayout();

        // Update on resize with debounce
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(updateLayout, 150);
        };

        window.addEventListener('resize', handleResize);

        // Also update when data changes
        if (data && data.length > 0) {
            // Small delay to ensure DOM is rendered
            setTimeout(updateLayout, 100);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
        };
    }, [data]);

    // Calculate total pages
    const totalPages = data ? Math.ceil(data.length / cardsPerPage) : 0;

    // Update current page based on scroll position
    const updateCurrentPage = useCallback(() => {
        if (!scrollRef.current || !data || data.length === 0 || cardsPerPage === 0) return;

        const scrollLeft = scrollRef.current.scrollLeft;
        const containerWidth = scrollRef.current.clientWidth;

        // Calculate which page we're on
        const pageWidth = containerWidth;
        const currentPageIndex = Math.round(scrollLeft / pageWidth);

        // Clamp the page index
        const clampedPage = Math.max(0, Math.min(currentPageIndex, totalPages - 1));

        if (clampedPage !== currentPage) {
            setCurrentPage(clampedPage);
        }
    }, [data, cardsPerPage, currentPage, totalPages]);

    // Scroll to specific page
    const scrollToPage = (pageIndex) => {
        if (!scrollRef.current || !data) return;

        const containerWidth = scrollRef.current.clientWidth;
        const scrollPosition = pageIndex * containerWidth;

        scrollRef.current.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        setCurrentPage(pageIndex);
    };

    // Handle scroll events
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollTimeout;
        const handleScroll = () => {
            if (scrollTimeout) {
                cancelAnimationFrame(scrollTimeout);
            }
            scrollTimeout = requestAnimationFrame(updateCurrentPage);
        };

        scrollContainer.addEventListener('scroll', handleScroll, { passive: true });

        // Also handle scroll end for better accuracy
        const handleScrollEnd = () => {
            updateCurrentPage();
        };

        let endTimeout;
        const handleScrollWithEnd = () => {
            clearTimeout(endTimeout);
            endTimeout = setTimeout(handleScrollEnd, 100);
        };

        scrollContainer.addEventListener('scroll', handleScrollWithEnd);

        // Initial calculation
        updateCurrentPage();

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
            scrollContainer.removeEventListener('scroll', handleScrollWithEnd);
            if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
            if (endTimeout) clearTimeout(endTimeout);
        };
    }, [updateCurrentPage]);

    // Handle touch/swipe for mobile
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let startX = 0;
        let scrollLeft = 0;

        const handleTouchStart = (e) => {
            startX = e.touches[0].pageX;
            scrollLeft = container.scrollLeft;
        };

        const handleTouchMove = (e) => {
            if (!e.cancelable) return;
            const x = e.touches[0].pageX;
            const walk = (x - startX) * 2; // Multiply for faster swipe
            container.scrollLeft = scrollLeft - walk;
        };

        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    if (!data || data.length === 0) {
        return <div className="px-4 md:px-8 py-4">Loading properties...</div>;
    }
    return (
        <div className="px-4 md:px-4">
            <h1 className="uppercase text-[18px] md:text-[24px] font-bold mb-4">categorized hotels</h1>

            <div className="relative w-full">
                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-2 gap-4"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    {data.map((item, index) => (
                        <div
                            key={item.id || index}
                            className="flex-shrink-0 snap-start"
                        >
                            <CardType2nd item={item} />
                        </div>
                    ))}
                </div>

                {/* Dots Indicator */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-2 gap-3">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToPage(index)}
                                className={`rounded-full transition-all duration-300 ${currentPage === index
                                    ? 'bg-blue-600 w-8 h-3'
                                    : 'bg-gray-300 w-3 h-3'
                                    }`}
                                aria-label={`Go to page ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default PropertySection