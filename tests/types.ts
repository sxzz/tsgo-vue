import { HelloButton } from '../dist/index.mjs'

type Props = InstanceType<typeof HelloButton>['$props']

const valid: Props = { label: 'Hello', count: 1, onClick: (count: number) => {} }
// @ts-expect-error label is required
const missing: Props = { count: 1 }
// @ts-expect-error count must be a number
const wrongCount: Props = { label: 'Hello', count: '1' }
// @ts-expect-error click receives a number
const wrongEvent: Props = { label: 'Hello', onClick: (count: string) => {} }
