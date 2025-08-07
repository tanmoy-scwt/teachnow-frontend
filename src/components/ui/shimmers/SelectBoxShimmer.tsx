
const SelectBoxShimmer = ({ shimmerCSS }: { shimmerCSS?: string }) => {
    return (
        <div className={`${shimmerCSS} w-full`}>
            <div className="h-10 w-full rounded-md bg-gray-200 animate-pulse"></div>
        </div>
    )
}

export default SelectBoxShimmer