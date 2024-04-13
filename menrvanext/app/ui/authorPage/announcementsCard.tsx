import { Button, Card, CardBody, CardFooter, Typography } from '@/providers'
import React from 'react'

const announcementsCard = () => {
  return (
    <div>
      <Card className="h-72 max-w-[25rem] bg-pink-lavender/70 dark:bg-chinese-violet">
      <CardBody>
        <Typography variant="h5" className="mb-2">
          Announcements!
        </Typography>
        <Typography>
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