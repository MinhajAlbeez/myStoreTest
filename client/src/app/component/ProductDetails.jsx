const ProductDetails = ({ productId, isLoading, error, data }) => {
  if (!productId) {
    return (
      <div className="border border-gray-300 p-6 rounded-lg shadow-sm text-center">
        <p className="text-gray-500 text-lg">
          📦 Enter a product ID above to view product details
        </p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <p className="text-center text-gray-500 animate-pulse">
        Loading product...
      </p>
    );
  }
  if (error) {
    return (
      <p className="text-center text-red-600">
        🚫 Product not found or error occurred.
      </p>
    );
  }
  if (data) {
    return (
      <div className="border border-gray-300 p-4 rounded-lg shadow-sm transition-all hover:shadow-md">
        <h2 className="font-semibold text-lg mb-1">{data.title}</h2>
        <p className="text-gray-700">
          💰 <strong>${data.current_price?.value || '0.00'}</strong>{" "}
          {data.current_price?.currency_code || 'USD'}
        </p>
      </div>
    );
  }
  return null;
};

export default ProductDetails;
