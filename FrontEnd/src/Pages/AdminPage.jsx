import BarChart from "../Components/Admin/BarChart";

const productSales = [
  { product: "Apples", sales: 100 },
  { product: "Bananas", sales: 75 },
  { product: "Oranges", sales: 50 },
  { product: "Apples", sales: 120 },
  { product: "Bananas", sales: 50 }
];

const AdminPage = () => {
  return (
    <div>
      <BarChart
        data={productSales}
        categoryKey="product"
        valueKey="sales"
        chartTitle="Sales by Product"
      />
    </div>
  );
};

export default AdminPage;
