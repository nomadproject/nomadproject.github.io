const Footer = props => (
  <footer className="pv4 ph3 ph5-m ph6-l mid-gray bg-light-gray">

    <p className="f3 firasans fw4 mw7 tc center">
        with thanks to
    </p>

    <div className="pv4 ph3 ph5-ns tc">
        <a className="dib h4 w4 mr3 mb4" href="http://www.kayd.org/">
            <img src="/static/img/kayd-logo.png" style={{height: '100px;'}} alt="KAYD Somali Arts and Culture" />
        </a>
        <a className="dib h4 w4 mr3 mb4" href="https://www.hlf.org.uk/">
            <img src="/static/img/hlf-logo.png" alt="Heritage Lottery Fund" />
        </a>
        <a className="dib h4 w4 mr3 mb2" href="http://www.sussex.ac.uk/shl/">
            <img src="/static/img/sussex-humanities-lab.jpg" alt="Sussex University Humanities Lab" />
        </a>
        <a className="dib h4 w4 mr3 mb2" href="http://www.bl.uk">
            <img src="/static/img/BL-logo.jpg" alt="British Library" />
        </a>

        <a className="dib h4 w4 mr3 mb2" href="http://www.britishmuseum.org">
            <img src="/static/img/BM-logo.png" alt="British Museum" />
        </a>

        <a className="dib h4 w4 mr3 mb2" href="http://www.quexpark.co.uk/museum/">
            <img src="/static/img/powell-cotton-logo.png" alt="Powell Cotton Museum" />
        </a>

        <a className="dib h4 w4 mr3 mb2" href="https://www.thefuseboxbrighton.com/">
            <img src="/static/img/fusebox-logo.png" alt="The FuseBox" />
        </a>
    </div>

    <small className="db tc">
        <p className="f6 fw3 lato">
            Built by <a href="https://mnemoscene.io">Mnemoscene</a> using <a href="https://universalviewer.io">Universal Viewer</a>
        </p>
        <p className="f6 fw3 lato">
            icons via <a href="https://fontawesome.com">Font Awesome</a>
        </p>
    </small>

    { props.children }

  </footer>
)

export default Footer;
