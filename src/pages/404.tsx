import scarecrow from '~/assets/images/Scarecrow.png';
import '~/assets/style/little-bounce.css';

function NotFound() {
  return (
    <div className="h-screen text-[#333333] dark:text-white lg:px-24 px-8 font-mono dark:bg-[#121212]">
      <header className="py-6 flex justify-between">
        <h1 className="uppercase font-bold">404 not found</h1>
        <button
          type="button"
          className="text-2xl i-bi-sun-fill dark:i-bi-moon-fill hocus:opacity-80"
          onClick={() => document.body.classList.toggle('dark')}
        >
          dark mode
        </button>
      </header>
      <div className="max-h-screen grid lg:(grid-cols-[2fr_3fr] pt-20) place-items-center">
        <img src={scarecrow} alt="scarecrow" className="little-bounce" />
        <article className="space-y-16">
          <header className="font-bold lg:text-6xl text-4xl max-w-160 leading-16">I have bad news for you</header>
          <p className="text-xl max-w-100">The page you are looking for might be removed or is temporarily unavailable</p>
          <div className="pt-8">
            <Link to="/" className="uppercase font-bold text-white bg-[#333333] py-6 px-12 hocus:opacity-80 transition-opacity">
              <span>back to homepage</span>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export default NotFound;
