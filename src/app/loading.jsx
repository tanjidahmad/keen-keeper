export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="text-center">
        
        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>

        {/* Text */}
        <p className="text-gray-600 font-medium">
          Loading friends...
        </p>

      </div>

    </div>
  );
}