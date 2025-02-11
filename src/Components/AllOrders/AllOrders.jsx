import { useState, useEffect } from "react";
import axios from "axios";

export default function AllOrdersComponent() {
  const token =localStorage.getItem('userToken');
  const decoded = jwtDecode(token);
  console.log(decoded);
  
  const [allOrders, setAllOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("https://ecommerce.routemisr.com/api/v1/orders/user/6797cb7c4e3f2254d6a6fafa");
        if (response.data && response.data.cartItems) {
          setAllOrders(response.data.cartItems);
        } else {
          setError('There are no requests currently');
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch reguests');
      } finally {
        setLoading(false);
      }
    };
    
    fetchOrders();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {loading && <p className="text-center text-gray-500">Loading requests..</p>}
      {error && <p className="text-center text-red-500 mt-2">{error}</p>}
      {allOrders && (
        <div className="mt-6 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-center mb-4">All Orders</h2>
            <ul className="space-y-4">
              {allOrders.map((item, index) => (
                <li key={index} className="bg-gray-50 p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  
                  <p className="font-medium text-lg">Order Number :{item.id}</p>
                  <p className="text-gray-600">Order date: {item.date}</p>
                  <p className="text-gray-600">State: {item.status}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
