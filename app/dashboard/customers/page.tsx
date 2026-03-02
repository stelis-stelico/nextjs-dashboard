import { fetchFilteredCustomers } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  const customers = await fetchFilteredCustomers('');

  return (
    <main className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Customers</h1>
        <Link href="/dashboard/customers/create" className="bg-blue-600 text-white px-4 py-2 rounded">
          + Add Customer
        </Link>
      </div>

      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Total Invoices</th>
              <th className="px-4 py-3">Total Pending</th>
              <th className="px-4 py-3">Total Paid</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b">
                <td className="px-4 py-3 flex items-center gap-3">
                  <Image
                    src={customer.image_url}
                    alt={customer.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  {customer.name}
                </td>

                <td className="px-4 py-3">{customer.email}</td>
                <td className="px-4 py-3">{customer.total_invoices}</td>
                <td className="px-4 py-3">{customer.total_pending}</td>
                <td className="px-4 py-3">{customer.total_paid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}