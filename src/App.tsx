import { defineComponent, ref } from 'vue'
import type { Ref } from 'vue'
import MonacoEditor from '@/components/MonacoEditor'

function toJson(data: any) {
  return JSON.stringify(data, null, 2)
}

const schema = {
  type: 'string',
}

export default defineComponent({
  setup() {
    const dataRef: Ref<any> = ref()
    const handleCodeChange = (code: string) => {
      let data: any
      try {
        data = JSON.parse(code)
      } catch (error) {}
    }

    return () => {
      const code = toJson(schema)
      return (
        <div>
          <MonacoEditor code={code} />
        </div>
      )
    }
  },
})
