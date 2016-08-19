import React from 'react'

class PageNavigation extends React.Component {
  render() {
    let prevClass = "btn btn-default " + (this.props.currentPage > 0 ? "" : "disabled")
    let nextClass = "btn btn-default " + (this.props.lastPage ? "disabled" : "")

    return (
      <ul className="pager">
        <li className="previous">
          <a className={prevClass} onClick={this.props.getPrevPage}>
            &larr; Prev
          </a>
        </li>
        <li>Page {this.props.currentPage + 1}</li>
        <li className="next">
          <a className={nextClass} onClick={this.props.getNextPage}>
            Next &rarr;
          </a>
        </li>
      </ul>
    )
  }
}

export default PageNavigation
