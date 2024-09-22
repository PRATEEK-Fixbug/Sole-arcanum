import React from 'react';
import './App.css';

const user = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  totalSpends: 1500,
  shoppingHistory: [
    { id: 1, product: 'Classic Sneakers', price: 99, date: '2023-08-15' },
    { id: 2, product: 'Elegant Loafers', price: 135, date: '2023-09-10' },
    { id: 3, product: 'Running Shoes', price: 110, date: '2023-09-18' },
    { id: 4, product: 'Sporty Trainers', price: 85, date: '2023-09-20' },
  ]
};

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <h2>User Dashboard</h2>

      {/* User Info Section */}
      <div className="user-info">
        <h3>Welcome, {user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Total Spends: ${user.totalSpends}</p>
      </div>

      {/* Shopping History Section */}
      <div className="shopping-history">
        <h3>Your Shopping History</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {user.shoppingHistory.map((item) => (
              <tr key={item.id}>
                <td>{item.product}</td>
                <td>${item.price}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardPage;
