import { Card, CardBody, Typography } from '@/providers/coreProviders'

const announcementsCard = () => {
  return (
    <div>
      <Card className="h-72 max-w-[25rem] bg-pink-lavender/70 dark:bg-chinese-violet">
        <CardBody>
          <p className="mb-2">
            Announcements!
          </p>
          <p>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </p>
        </CardBody>
      </Card>
    </div>
  )
}

export default announcementsCard