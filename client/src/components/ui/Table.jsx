const Table = ({ headers, rows }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Table Head */}
        <thead className="bg-gray-100">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wide"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition duration-200"
            >
              {row.map((cell, i) => (
                <td
                  key={i}
                  className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
