import { Component } from 'react'

export default ChartComponent => (
  class ResponsiveChart extends Component {
    constructor(props) {
      super(props)

      this.state = {
        containerWidth: null,
      }

      this.fitParentContainer = this.fitParentContainer.bind(this)
    }

    componentDidMount() {
      this.fitParentContainer()
      window.addEventListener('resize', this.fitParentContainer)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.fitParentContainer)
    }

    fitParentContainer() {
      const { containerWidth } = this.state
      const currentContainerWidth = this.chartContainer
        .getBoundingClientRect().width
      
      const shouldResize = (containerWidth !== currentContainerWidth)

      if (shouldResize) {
        this.setState({
          containerWidth: currentContainerWidth,
        })
      }
    }

    renderChart() {
      const { containerWidth: parentWidth } = this.state

      return (
        <ChartComponent {...this.props} parentWidth={parentWidth} />
      )
    }

    render() {
      const { containerWidth } = this.state
      const shouldRenderChart = containerWidth !== null
      const pStyle = {
        'display': 'block',
        'textAlign':'center',
      };
      return (
        <div
          ref={(el) => { this.chartContainer = el }}
          className="Responsive-wrapper"
          style={pStyle}
        >
          {shouldRenderChart && this.renderChart()}
        </div>
      )
    }
  }
)