import { Link } from "react-router-dom"

export default function CountriesList(props) {
    const { countries } = props
    return (
        <div className="container">
            <div className="row">
                <div className="col-5"
                    style={{ maxHeight: "90vh", overflow: 'scroll' }}
                >
                    <div className="list-group">
                        {countries.length === 0 ? (
                            <p>Loading data...</p>
                        ) : (
                            countries.map((country) => (
                                <Link
                                    key={country.alpha3code}
                                    className="list-group-item list-group-item-action"
                                    to={country.alpha3code}
                                >
                                    <img
                                        src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png `}
                                        alt=""
                                        width="100px"
                                        heigh="auto"
                                    />
                                    <p>{country.name.official}</p>
                                </Link>
                            ))
                        )}

                    </div>
                </div>

            </div>

        </div>
    )
}