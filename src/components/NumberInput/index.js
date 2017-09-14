import React from 'react';
import styles from './styles.css';
import { sanitizeCurrency } from '../../utils/StringUtils';
import { focusEnd } from '../../utils/DOMUtils';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class WidthFinder extends React.Component {
  componentDidMount() {
    this.props.onValueChange(this.el.offsetWidth);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.props.onValueChange(this.el.offsetWidth);
    }
  }

  render() {
    return (
      <button
        className={styles.input}
        ref={node => { this.el = node; }}
        style={{
          border: 'none',
          display: 'inline-block',
          margin: 0,
          position: 'fixed',
          visibility: 'hidden',
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

class NumberInput extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.afterFocus = this.afterFocus.bind(this);
    this.onWidthChange = this.onWidthChange.bind(this);

    this.state = {
      widthNeedsUpdate: true,
      width: 'auto',
    };
  }

  componentDidMount() {
    this.input.focus();
  }

  afterFocus() {
    focusEnd(this.input, false);
  }

  onChange(e) {
    const { value } = e.target;
    if (parseFloat(value) <= this.props.max) {
      this.setState({
        widthNeedsUpdate: true,
      }, () => {
        const sanitizedValue = sanitizeCurrency(value);
        this.props.onChange(sanitizedValue);
      });
    } else if (e.target.value === '') {
      this.setState({
        widthNeedsUpdate: true,
      }, () => {
        this.props.onChange("0");
      });
    }
  }

  onWidthChange(width) {
    this.setState({
      width,
      widthNeedsUpdate: false,
    });
  }

  get value() {
    return this.props.value || 0;
  }

  render() {
    return (
      <span
        className={cx({
          root: true,
          dim: this.props.dim,
        })}
      >
        <span className={styles.prefix}>{this.props.prefix}</span>
        <input
          ref={node => { this.input = node; }}
          pattern="[0-9]+([\.])?([0-9])?([0-9])?"
          style={{
            width: this.state.width,
          }}
          className={styles.input}
          type="text"
          value={this.value}
          onChange={this.onChange}
          onFocus={this.afterFocus}
        />
        <WidthFinder
          value={this.value}
          onValueChange={this.onWidthChange}
        />
      </span>
    );
  }
}

export default NumberInput;
