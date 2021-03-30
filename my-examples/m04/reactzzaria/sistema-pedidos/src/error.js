import  { PureComponent } from 'react';

class ErrorBoundary extends PureComponent {
  state = { hasError: false }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  componentDidCatch (error, info) {
    // Esse método envia erros para serviçõs especializados nesse tipo.
    console.log('Error:', error)
    console.log('Info:', info.componentStack)
  }

  render () {
    return this.props.children(this.state.hasError);
  }
}

export default ErrorBoundary
