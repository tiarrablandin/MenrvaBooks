import { Card, CardBody, Typography } from '@/providers/coreProviders'

const announcementsCard = () => {
  return (
    <div>
      <Card className="h-72 max-w-[25rem] bg-deep-sea/70 text-eggplant dark:text-parchment/70">
        <CardBody>
          <Typography variant='h4' className="mb-2">
            Announcements!
          </Typography>
          <Typography variant='paragraph' className='font-semibold leading-tight'>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
      </Card>
    </div>
  )
}

export default announcementsCard