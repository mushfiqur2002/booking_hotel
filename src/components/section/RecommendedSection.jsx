import Card from "../Card"
import { useHotels } from "../../assets/fetchData";
import { useRef, useState, useEffect } from "react";

function RecommendedSection() {
    const data = useHotels()
    const scrollRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    // Update button visibility based on scroll position
    const updateButtonVisibility = () => {
        const { current } = scrollRef;
        if (current) {
            const { scrollLeft, scrollWidth, clientWidth } = current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (!current) return;

        const cardWidth = 300; // Adjust based on your card width + gap
        const scrollAmount = cardWidth * 2; // Scroll 2 cards at a time
        const maxScroll = current.scrollWidth - current.clientWidth;

        if (direction === "left") {
            const newScrollLeft = Math.max(0, current.scrollLeft - scrollAmount);
            current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
        } else {
            const newScrollLeft = Math.min(maxScroll, current.scrollLeft + scrollAmount);
            current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
        }
    };

    // Auto-hide buttons when at edges
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', updateButtonVisibility);
            updateButtonVisibility(); // Initial check
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', updateButtonVisibility);
            }
        };
    }, [data]);

    // Add keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                scroll("left");
            } else if (e.key === 'ArrowRight') {
                scroll("right");
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    if (!data || data.length === 0) {
        return <div className="px-8 py-12">Loading hotels...</div>;
    }

    return (
        <div className="px-4 md:px-8 py-12">
            <h1 className="uppercase text-[18px] md:text-[24px] font-bold mb-4">recommended</h1>
            <div className="relative w-full group">
                {/* Left Scroll Button */}
                {showLeftButton && (
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white 
                                 shadow-lg rounded-full w-10 h-10 flex items-center justify-center 
                                 z-10 transition-all duration-200 opacity-0 group-hover:opacity-100 
                                 hover:scale-110"
                        aria-label="Scroll left"
                    >
                        <span className="text-lg font-bold">‹</span>
                    </button>
                )}

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    className="flex items-center gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-2"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {data.map((item, index) => (
                        <div
                            key={item.id || index}
                            className="flex-shrink-0 snap-start gap-4"
                        >
                            <Card dataPack={item} />
                        </div>
                    ))}
                </div>

                {/* Right Scroll Button */}
                {showRightButton && (
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white 
                                 shadow-lg rounded-full w-10 h-10 flex items-center justify-center 
                                 z-10 transition-all duration-200 opacity-0 group-hover:opacity-100 
                                 hover:scale-110"
                        aria-label="Scroll right"
                    >
                        <span className="text-lg font-bold">›</span>
                    </button>
                )}
            </div>
        </div>
    )
}

export default RecommendedSection