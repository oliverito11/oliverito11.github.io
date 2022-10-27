const NextPage = ({page, pages, changePage, currentPage, setCurrentPage}) => {
  return (
    <div className='container-fluid'>
      <div className='row row-cols-12'>
        <div className='d-flex align-items-center justify-content-center'>
          <input type="button" className='btn btn-green me-2' value={"<<"} disabled={currentPage - 1 < 0} onClick={() => {
            setCurrentPage(0)
            changePage(0, page.toLowerCase())
          }} />
          <input type="button" className='btn btn-green me-4' value={"<"} disabled={currentPage - 1 < 0} onClick={() => {
            setCurrentPage(currentPage - 1)
            changePage(currentPage - 1, page.toLowerCase())
          }} />
          {currentPage + 1}
          <input type="button" className='btn btn-green ms-4' value={">"} disabled={currentPage + 1 > pages} onClick={() => {
            setCurrentPage(currentPage + 1)
            changePage(currentPage + 1, page.toLowerCase())
          }} />
          <input type="button" className='btn btn-green ms-2' value={">>"} disabled={currentPage + 1 > pages} onClick={() => {
            setCurrentPage(pages)
            changePage(pages, page.toLowerCase())
          }} />
        </div>
      </div>
    </div>
  )
}

export default NextPage