export default {
  name: 'mdWrapper',
  setup(_, { slots }) {
    return () => <div class="md-wrapper">
      { slots.default() }
    </div>
  }
}