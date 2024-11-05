// BlogSkeleton.js
export const BlogSkeleton = () => (
    <div className="w-full pb-10 bg-gray-100 animate-pulse">
      <div className="container mx-auto">
        <div className="grid-container">
          <div className="blog-content">
            <div className="w-full h-48 bg-gray-300 rounded mb-5"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-3"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-3"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // ProductSkeleton.js
export const ProductSkeleton = () => (
    <div className="block border border-gray-200 rounded-lg shadow-md bg-white overflow-hidden animate-pulse">
      <div className="w-full h-56 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      </div>
    </div>
  );
  