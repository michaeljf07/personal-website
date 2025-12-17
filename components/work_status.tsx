export default function WorkStatus() {
    return (
        <div className="inline-flex items-center gap-2 bg-green-600/10 border border-green-500/20 rounded-full px-4 py-2 w-fit mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-400 font-medium">
                Open to opportunities
            </span>
        </div>
    );
}
