export default function news({data}) {
    return (
        <>
        <div>
            <h1>loaded</h1>
            <h1 className="heading">Top Techcrunch Headlines!</h1>
        </div>
        <div className={styles.newsPage}>
            { // here you always have to check if the array exist by optional chaining
             data.articles?.map(
                (current, index) => {
                    return(
                        <Card datas={current} key={index+current.author} imageSrc={current.urlToImage} title={current.title} author={current.author}/>
                    )
                }
            )
        }
        </div>
        </>
    )
}

export async function getStaticProps() {
 const   type='transplant';
   const  organ='lungs';
    const response = await fetch(`https://api.coc.houseworksinc.co/api/v1/doctors/?type=${type}&organ=${organ}`)
    const data = await response.json() // by default Article length is 104
    // const articles =  data.articles;

    return{
        props : {
            data,
        }
    }
}
