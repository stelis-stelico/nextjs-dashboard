import { createCustomer } from '@/app/lib/actions';

export default function Page() {
  return (
    <main className="max-w-lg">
      <h1 className="text-2xl font-semibold mb-6">Add Customer</h1>

      <form action={createCustomer} className="flex flex-col gap-4">
        <input
          name="name"
          placeholder="Customer Name"
          required
          className="border p-2 rounded"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="border p-2 rounded"
        />

        <input
          name="image_url"
          placeholder="Image URL (optional)"
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Create Customer
        </button>
      </form>
    </main>
  );
}