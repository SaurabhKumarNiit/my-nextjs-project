import Link from 'next/link'

const SomePage = () => {
  return (
    <section>
      <h1>Some page</h1>
      <Link
        href={{
          pathname: '/searchView',
          query: {
            search: 'search'
          }
        }}
      >
        Go to another page
      </Link>
    </section>
  )
}

export default SomePage