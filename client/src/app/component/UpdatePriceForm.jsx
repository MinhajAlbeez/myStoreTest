const UpdatePriceForm = ({ data, productId, setProductId, mutation }) => {
  if (!data) return null;
  return (
    <div className="space-y-4 pt-4 border-t border-gray-100">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-lg">🔧 Update Price</h3>
        <button
          type="button"
          onClick={() => {
            setProductId("");
            document.getElementById('price-input').value = "";
            document.getElementById('currency-select').value = "";
          }}
          className="text-sm text-gray-500 hover:text-gray-700 px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 transition"
        >
          🔄 Reset
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="number"
            id="price-input"
            placeholder="New Price"
            step="0.01"
            min="0"
            required
            className="border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none px-4 py-2 w-full rounded-lg"
          />
          <select
            id="currency-select"
            required
            defaultValue=""
            className="border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none px-4 py-2 rounded-lg"
          >
            <option value="" disabled>Select Currency</option>
            <option value="PKR">PKR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="AED">AED</option>
            <option value="SAR">SAR</option>
          </select>
        </div>

        <button
          type="button"
          disabled={mutation.isPending}
          onClick={(e) => {
            const priceInput = document.getElementById('price-input');
            const currencySelect = document.getElementById('currency-select');
            const value = parseFloat(priceInput.value);
            const currency_code = currencySelect.value;
            const id = parseInt(productId);

            if (isNaN(value) || value <= 0) {
              alert("Please enter a valid price greater than 0");
              return;
            }
            if (!currency_code) {
              alert("Please select a currency");
              return;
            }
            if (isNaN(id) || id <= 0) {
              alert("Invalid product ID");
              return;
            }
            mutation.mutate({
              id: id,
              price: { value, currency_code },
            });
          }}
          className="bg-black text-white px-4 py-2 w-full rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Updating..." : "Update Price"}
        </button>

        {mutation.isError && (
          <p className="text-sm text-red-500 text-center">
            ⚠️ Failed to update: {mutation.error?.response?.data?.error || mutation.error?.message || 'Unknown error'}
          </p>
        )}
        {mutation.isSuccess && (
          <p className="text-sm text-green-600 text-center">
            ✅ Price updated successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default UpdatePriceForm;
