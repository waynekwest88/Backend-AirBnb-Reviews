import React from 'react';
import Message from './Message';

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pager: {},
      currentPage: 1,
      messages: this.props.reviews
    };
  }

  componentWillMount() {
    this.setupData(this.props.reviews, message =>
      this.setState({ messages: message })
    );
  }

  setupData(msgObj, cb) {
    let total = [];
    let inner = [];
    if (msgObj.length < 7) {
      return msgObj;
    }
    for (let i = 0; i < msgObj.length; i++) {
      if (inner.length === 7) {
        total.push(inner);
        inner = [];
      }
      inner.push(msgObj[i]);
    }
    cb(total);
  }

  handlePageChange(page) {
    this.setStage({ page: page });
  }

  setPage(page) {
    // TODO: every page gets 7 items, and render out buttons based on total message
  }

  getPage() {
    // TODO: retrieve the stored message obj from slicing
  }

  render() {
    return (
      <div>
        <Message msgObj={this.state.messages[0]} />
      </div>
    );
  }
}
// setPage(page) {
//   var items = this.props.items;
//   var pager = this.state.pager;
//   if (page < 1 || page > pager.totalPages) {
//       return;
//   }
//   // get new pager object for specified page
//   pager = this.getPager(items.length, page);
//   // get new page of items from items array
//   var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
//   // update state
//   this.setState({ pager: pager });
//   // call change page function in parent component
//   this.props.onChangePage(pageOfItems);
// }

{
  /* <Message msgObj={this.state.messages[0]} /> */
}
