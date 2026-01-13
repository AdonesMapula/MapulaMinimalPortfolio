const Footer = () => {
  return (
    <footer className="no-print border-t border-black dark:border-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} Adones Mapula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

