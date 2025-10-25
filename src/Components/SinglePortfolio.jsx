import { Link } from "react-router-dom";
// eslint-disable-next-line
const SinglePortfolio = ({ porfolio, portfoliofor, isDark = false, isModern = false }) => {
  return (
    <div className="">
      {portfoliofor && (
        <>
          <h2
            data-aos="fade-up"
            data-aos-offset="-700"
            className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            {portfoliofor}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-offset="-700"
            className={`mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Our web development projects showcase innovative and user-friendly
            designs that deliver exceptional digital experiences. From responsive
            layouts to seamless functionality, each project is crafted to meet the
            unique needs of our clients and their audiences.
          </p>
        </>
      )}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${isModern ? 'gap-8' : 'gap-6'}`}>
        {porfolio?.map((item, index) => (
          <Link
            data-aos="fade-up"
            data-aos-offset="-700"
            data-aos-delay={index * 100}
            key={item.id}
            className={`group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
              isModern 
                ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 rounded-2xl shadow-2xl hover:shadow-primary/20' 
                : isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg shadow-lg' 
                  : 'bg-white rounded-lg shadow-lg'
            }`}
            to={item.link}
          >
            {/* Modern Card Overlay */}
            {isModern && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            )}
            
            {/* Image Container */}
            <div className={`relative overflow-hidden ${isModern ? 'h-56' : 'h-48'}`}>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {isModern && (
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </div>
            
            {/* Content */}
            <div className={`${isModern ? 'p-6' : 'p-4'} relative z-20`}>
              <h3 className={`font-semibold transition-colors duration-300 ${
                isModern 
                  ? 'text-white text-lg group-hover:text-primary' 
                  : isDark 
                    ? 'text-gray-200 text-lg' 
                    : 'text-gray-400 text-lg'
              }`}>
                {item.title}
              </h3>
              
              {isModern && (
                <div className="mt-3 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Project</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              )}
            </div>
            
            {/* Modern Glow Effect */}
            {isModern && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SinglePortfolio;
