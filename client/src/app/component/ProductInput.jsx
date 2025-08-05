const ProductInput = ({ productId, setProductId }) => (
  <input
    type="number"
    value={productId}
    onChange={(e) => {
      const value = e.target.value;
      if (value === "" || (parseInt(value) > 0 && !value.startsWith('0'))) {
        setProductId(value);
      }
    }}
    min="1"
    className="border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none px-4 py-2 w-full rounded-lg placeholder-gray-400"
    placeholder="🔍 Enter Product ID (must be greater than 0)"
  />
);

export default ProductInput;
