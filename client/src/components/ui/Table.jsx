const Table = ({ headers, children }) => {
  return (
    <table className="w-full bg-white rounded shadow">
      <thead className="bg-gray-200">
        <tr>
          {headers.map((h) => (
            <th key={h} className="p-2 text-left">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
