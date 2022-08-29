import '../styles/BackToTop.css'

function BackToTop() {
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <button type="button" className="btn rounded-circle fs-4" id="backtotop" onClick={backToTop}>
            ↑
        </button>
    );
}

export default BackToTop;