import { Checkbox, Typography } from '@/providers/coreProviders'
import Link from 'next/link'
import React from 'react'

const Payment = () => {
  return (
    <div>
      <Checkbox
      label={
        (
          <Typography className="font-medium !text-sm !text-gray-500">
            I agree the{" "}
            <Link
              href="/TermsAndConditions"
              className="font-medium underline text-gray-900 hover:text-gray-900"
            >
              Terms and Conditions
            </Link>
            .
          </Typography>
        ) as any
      }
      containerProps={{
        className: "-ml-2.5",
      }}
      />
    </div>
  )
}

export default Payment