export const Movie = (props) => {
    const {
        Title,
        Year,
        imdID,
        Type, Poster
    } = props;
    return (
        <div classNameName="card movie" id={imdID}>
            <div className="card-image waves-effect waves-block waves-light">
                {Poster === 'N/A' ? <img className="activator" src={`https://via.placeholder.com/300x550?text=${Title}`}></img> : <img className="activator" src={Poster} />}

            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {Title}
                </span>
                <p>{Year}<span className="right">{Type}</span></p>
            </div>
        </div>
    )
}