import Header from '../Static/Header';
import Footer from '../Static/Footer';
import MainSearch from '../Static/MainSearch';
import CardElement from '../Static/CardElement';
import { useEffect, useState } from 'react';
import { data } from 'react-router-dom';

function Home() {
    const heroImage = `${process.env.PUBLIC_URL}/img/img-01-big.jpg`;
    const [meals, setMeals] = useState([]);
    const [hasFetched, setHasFetched] = useState(false);

    useEffect(() => {
        if (hasFetched) return;
        const fetchMeals = async () => {
            try {
                const promises = Array.from({ length: 12 }).map(() =>
                    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
                        .then(response => response.json())
                        .then(data => data.meals[0])
                );
                const results = await Promise.all(promises);
                console.log(results);
                setMeals(results);
                setHasFetched(true);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchMeals();
    }, []);
    function fillRandomMeals() {
        return meals.map((data, index) => (
            <CardElement key={index}
                img={data.strMealThumb}
                title={data.strMeal}
                area={data.strArea}
                category={data.strCategory} />
        ));
    }
    return (
        <>
            <Header />
            <MainSearch />
            <div className="container-fluid tm-container-content tm-mt-60">
                <div className="row tm-mb-90 tm-gallery">
                    {fillRandomMeals()}
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Home;