import React from 'react'
import DevTable from './dev-table'
const data = [
  { id: 1, name: "John", age: 30, city: "New York", country: "USA", email: "john@example.com", phone: "123-456-7890", occupation: "Engineer" },
  { id: 2, name: "Jane", age: 25, city: "Los Angeles", country: "USA", email: "jane@example.com", phone: "234-567-8901", occupation: "Designer" },
  { id: 3, name: "Bob", age: 35, city: "Chicago", country: "USA", email: "bob@example.com", phone: "345-678-9012", occupation: "Manager" },
  { id: 4, name: "Alice", age: 28, city: "Seattle", country: "USA", email: "alice@example.com", phone: "456-789-0123", occupation: "Developer" },
  { id: 5, name: "Tom", age: 40, city: "Miami", country: "USA", email: "tom@example.com", phone: "567-890-1234", occupation: "Sales" },
  { id: 6, name: "Emma", age: 22, city: "San Francisco", country: "USA", email: "emma@example.com", phone: "678-901-2345", occupation: "Intern" },
];
const DevTableUsage = () => {
  return (
    <DevTable  data={data}
    styleRows={[{ position: 3, style: "bg-ACCENT/30" }]}
    stickyColumns={["id", "name", "occupation"]}
    columns={["id", "name", "age", "city", "country", "email", "phone", "occupation"]}
    />
  )
}

export default DevTableUsage

