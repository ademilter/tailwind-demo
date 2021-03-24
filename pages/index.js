import Button from '../components/button'
import Modal from '../components/modal'

function HomePage() {
  return (
    <div className="p-8">
      <div className="mb-10 flex space-x-4">
        <Button>Label</Button>
        <Button disabled>Label</Button>
        <Button appearance="default">Label</Button>
        <Button appearance="default" disabled>
          Label
        </Button>
      </div>

      <Modal />
    </div>
  )
}

export default HomePage
