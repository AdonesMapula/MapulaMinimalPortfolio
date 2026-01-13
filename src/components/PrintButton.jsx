const PrintButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="no-print border border-black dark:border-white px-6 py-2 hover:opacity-70 transition-opacity"
    >
      {label}
    </button>
  );
};

export default PrintButton;

