import imgHeaderDesktop from './images/image-header-desktop.jpg';
import imgHeaderMobile from './images/image-header-mobile.jpg';

function App() {
  return (
    <main className="flex h-screen items-center justify-center bg-very-dark-blue">
      <section className="flex flex-col sm:flex-row bg-dark-desaturated-blue rounded-lg overflow-hidden mx-6">
        <div className="relative sm:hidden max-w-sm">
          <div className="absolute top-0 left-0 w-full h-full bg-violet-800/50"></div>
          <img className="object-cover" src={imgHeaderMobile} alt="Header" />
        </div>
        <div className="flex flex-col p-8 sm:p-16 sm:pr-20 max-w-sm sm:max-w-xl space-y-8">
          <h1 className="text-white text-2xl text-center sm:text-left sm:text-4xl font-bold font-inter tracking-wide leading-tight">
            Get <span className="text-soft-violet">insights</span> that help
            your business grow.
          </h1>
          <p className="text-white-main-paragraph text-sm text-center sm:text-left sm:text-base font-lexend-deca leading-relaxed">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="grow flex flex-col sm:flex-row items-center sm:items-end justify-between space-y-8">
            <div>
              <p className="text-white text-center sm:text-left text-2xl font-bold font-inter pb-2">
                10k+
              </p>
              <p className="uppercase text-xs text-center sm:text-left text-white-stat-headings">
                companies
              </p>
            </div>
            <div>
              <p className="text-white text-center sm:text-left text-2xl font-bold font-inter pb-2">
                314
              </p>
              <p className="uppercase text-xs text-center sm:text-left text-white-stat-headings">
                templates
              </p>
            </div>
            <div>
              <p className="text-white text-center sm:text-left text-2xl font-bold font-inter pb-2">
                12M+
              </p>
              <p className="uppercase text-xs text-center sm:text-left text-white-stat-headings">
                queries
              </p>
            </div>
          </div>
        </div>
        <div className="relative hidden xl:block">
          <div className="absolute top-0 left-0 w-full h-full bg-violet-800/50"></div>
          <img className="object-contain" src={imgHeaderDesktop} alt="Header" />
        </div>
      </section>
    </main>
  );
}

export default App;
