function AboutComponent() {
  return (
    <div className="w-full [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          About
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Movies Masala is an innovative application designed to bring the
          latest and greatest in the world of movies right to your fingertips.
          Founded by Piyush Agrawal, the application aims to provide users with
          a comprehensive platform to explore, review, and discuss movies from
          various genres and eras.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The journey of Movies Masala began with a simple idea: to create a
          space where movie enthusiasts could come together and share their
          passion for cinema. Piyush Agrawal, a movie buff himself, envisioned a
          platform that not only offered movie information but also fostered a
          community of like-minded individuals.
        </p>
        <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Terms and Conditions:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>
            Users must be at least 13 years old to register and use the
            application.
          </li>
          <li>
            All content posted by users must be respectful and adhere to
            community guidelines.
          </li>
          <li>
            Movies Masala reserves the right to remove any content that violates
            these terms.
          </li>
          <li>
            Users are responsible for maintaining the confidentiality of their
            account information.
          </li>
          <li>
            Movies Masala is not responsible for any third-party content or
            links provided within the application.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutComponent;
