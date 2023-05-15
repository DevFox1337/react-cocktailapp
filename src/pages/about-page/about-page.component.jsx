import "./_about-page.scss"

const AboutPage = () => {
  return (
    <main>
      <div className='about-page'>
        <div className='about-page__section'>
          <h2 className='about-page__section-header'>the project</h2>
          <p className='about-page__section-text'>
            This app was built using React.JS and the TheCocktailDB API. It allows users to view a
            list of random cocktails and view detailed information about them. It also has a search
            function, allowing users to search for a specific drink by name and the option to save
            drinks in a list of favorites.
          </p>
        </div>
        <div className='about-page__section'>
          <h2 className='about-page__section-header'>react.js</h2>
          <p className='about-page__section-text'>
            React.JS is a JavaScript library that is used for building user interfaces for web
            applications. It was developed by Facebook and has become increasingly popular due to
            its ability to create dynamic and responsive user interfaces. ReactJS uses a
            component-based architecture, which allows developers to build reusable and modular
            code. It also has a virtual DOM, which makes it faster and more efficient than
            traditional DOM manipulation. ReactJS is often used in conjunction with other
            technologies such as Redux, Node.js, and GraphQL to build scalable and performant web
            applications.
          </p>
        </div>
        <div className='about-page__section'>
          <h2 className='about-page__section-header'>thecocktailDB</h2>
          <p className='about-page__section-text'>
            TheCocktailDB is a free and open-source database that provides information about
            cocktails, including their ingredients, preparation methods, and serving instructions.
            It contains a vast collection of cocktail recipes. The database also provides images of
            the cocktails, ratings, and reviews from other users, and a feature that allows users to
            search for cocktails based on their ingredients. TheCocktailDB is a valuable resource
            for bartenders, mixologists, and cocktail enthusiasts who are looking for inspiration or
            want to learn more about their favorite drinks.
          </p>
        </div>
      </div>
    </main>
  )
}

export default AboutPage
