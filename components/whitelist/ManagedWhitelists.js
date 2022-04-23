import Link from "next/link"

const whitelists = [
  { name: 'DAO Genesis Token', projectLink: 'www.datadrivendao.xyz', walletsWhitelisted: 10 },
  // More whitelists...
]

export default function ManagedWhitelits() {
  return (
    <div className="px-4 py-5 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Managed Whitelists</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all whitelists in your account including their project links and number of whitelisted wallets.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link href="/managed-whitelists/new">
            <a

              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
            >
              Add whitelist
            </a>
          </Link>
        </div>
      </div>
      <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Project Link
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Wallets Whitelisted
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Add</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {whitelists.map((whitelist) => (
              <tr key={whitelist.name}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                  {whitelist.name}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Project Link</dt>
                    <dd className="mt-1 truncate text-gray-700">{whitelist.projectLink}</dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{whitelist.projectLink}</td>
                <td className="px-3 py-4 text-sm text-gray-500">{whitelist.walletsWhitelisted}</td>
                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" className="text-blue-600 hover:text-blue-900">
                    Edit<span className="sr-only">, {whitelist.name}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}