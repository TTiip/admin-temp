import ReviewItem from './review-item'

export default defineComponent({
  name: 'review',
  setup () {
    const data = {
      oldData: {
        test1: '测试1 - oldData',
        test2: '测试2 - oldData',
        test3: '测试3 - oldData',
        test4: {
          testt1: '测试 1-1 - oldData',
          testt2: '测试 1-2 - oldData',
          testt3: '测试 1-3 - oldData',
          testt4: {
            testtt1: '测试 1-1-1 - oldData',
            testtt2: '测试 1-1-2 - oldData',
            testtt3: '测试 1-1-3 - oldData',
            testtt4: '测试 1-1-4 - oldData'
          }
        },
        test5: [
          {
            testt1: '数组的 1 - oldData',
            testt2: '数组的 2 - oldData',
            testt3: '数组的 3 - oldData',
            testt4: '数组的 4 - oldData'
          }
        ]
      },
      newData: {
        test1: '测试1 - newData',
        test2: '测试2 - newData',
        test3: '测试3 - newData',
        test4: {
          testt1: '测试 1-1 - newData',
          testt2: '测试 1-2 - newData',
          testt3: '测试 1-3 - newData',
          testt4: {
            testtt1: '测试 1-1-1 - newData',
            testtt2: '测试 1-1-2 - newData',
            testtt3: '测试 1-1-3 - newData',
            testtt4: '测试 1-1-4 - newData'
          }
        },
        test5: [
          {
            testt1: '数组的 1 - newData',
            testt2: '数组的 2 - newData',
            testt3: '数组的 3 - newData',
            testt4: '数组的 4 - newData'
          }
        ]
      }
    }
    const maps = {
      test1: {
        label: '测试1',
        type: 'string'
      },
      test2: {
        label: '测试2',
        type: 'string'
      },
      test3: {
        label: '测试3',
        type: 'string'
      },
      test4: {
        label: '测试4',
        type: 'object',
        keyMaps: {
          testt1: {
            label: '测试1-1',
            type: 'string'
          },
          testt2: {
            label: '测试1-2',
            type: 'string'
          },
          testt3: {
            label: '测试1-3',
            type: 'string'
          },
          testt4: {
            label: '测试1-4',
            type: 'object',
            keyMaps: {
              testtt1: {
                label: '测试1-1-1',
                type: 'string'
              },
              testtt2: {
                label: '测试1-1-2',
                type: 'string'
              },
              testtt3: {
                label: '测试1-1-3',
                type: 'string'
              }
            }
          }
        }
      },
      test5: {
        label: '测试5',
        type: 'array',
        keyMaps: {
          testt1: {
            label: '组件1',
            type: 'string'
          },
          testt2: {
            label: '组件2',
            type: 'string'
          },
          testt3: {
            label: '组件3',
            type: 'string'
          },
          testt4: {
            label: '组件4',
            type: 'string'
          }
        }
      }
    }

    function coverData (maps: any, newData: any, oldData: any) {
      Object.keys(maps).map(key => {
        if (maps[key].type === 'object') {
          coverData(maps[key].keyMaps, newData[key], oldData[key])
        } else if (maps[key].type === 'array') {
          // console.log(newData, 'newData')
          // console.log(oldData, 'oldData')
          console.log(maps, 'maps')
          console.log(maps[key].keyMaps, 'maps[key].keyMaps')
          console.log(newData, 'newData')
          console.log(oldData, 'oldData')
          console.log(newData[key], 'newData[key]')
          console.log(oldData[key], 'oldData[key]')
          console.log('====================')
          coverData(maps[key].keyMaps, newData[key], oldData[key])
        } else {
          console.log(key, 'key')
          maps[key].newVal = newData[key]
          maps[key].oldVal = oldData[key]
        }
      })
    }

    function generateData () {
      coverData(maps, data.newData, data.oldData)
    }

    generateData()
    console.log(maps, 'mapsmapsmapsmaps')

    return () => (
      <div>
        <ReviewItem maps={ maps } />
      </div>
    )
  }
})
