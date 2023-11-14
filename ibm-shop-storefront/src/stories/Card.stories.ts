import type { Meta, StoryObj } from '@storybook/svelte';
import Card from '../ui/molecules/Card.svelte';

const meta = {
  title: 'Example/Card',
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/svelte/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Static: Story = {
    args: {
        card: {
          "id": 1,
          "attributes": {
              "name": "Lenovo gaming laptop",
              "description": "# Some super description\n\nThis laptop is supercool",
              "createdAt": "2023-03-01T09:04:13.017Z",
              "updatedAt": "2023-05-15T11:08:50.727Z",
              "publishedAt": "2023-03-01T09:04:16.368Z",
              "locale": "en",
              "basePrice": 1000,
              "storage": 20,
              "onMain": true,
              "media": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "name": "computer_keyboard_in_front_of_Alps_8276bb03-3711-4c2e-9f47-33aa60f7e545.png",
                              "alternativeText": null,
                              "caption": null,
                              "width": 1024,
                              "height": 1024,
                              "formats": {
                                  "large": {
                                      "ext": ".png",
                                      "url": "/uploads/large_computer_keyboard_in_front_of_Alps_8276bb03_3711_4c2e_9f47_33aa60f7e545_aa7e842a16.png",
                                      "hash": "large_computer_keyboard_in_front_of_Alps_8276bb03_3711_4c2e_9f47_33aa60f7e545_aa7e842a16",
                                      "mime": "image/png",
                                      "name": "large_computer_keyboard_in_front_of_Alps_8276bb03-3711-4c2e-9f47-33aa60f7e545.png",
                                      "path": null,
                                      "size": 2159.99,
                                      "width": 1000,
                                      "height": 1000
                                  },
                                  "small": {
                                      "ext": ".png",
                                      "url": "/uploads/small_computer_keyboard_in_front_of_Alps_8276bb03_3711_4c2e_9f47_33aa60f7e545_aa7e842a16.png",
                                      "hash": "small_computer_keyboard_in_front_of_Alps_8276bb03_3711_4c2e_9f47_33aa60f7e545_aa7e842a16",
                                      "mime": "image/png",
                                      "name": "small_computer_keyboard_in_front_of_Alps_8276bb03-3711-4c2e-9f47-33aa60f7e545.png",
                                      "path": null,
                                      "size": 579.42,
                                      "width": 500,
                                      "height": 500
                                  },
                                  "medium": {
                                      "ext": ".png",
                                      "url": "/uploads/medium_computer_keyboard_in_front_of_Alps_8276bb03_3711_4c2e_9f47_33aa60f7e545_aa7e842a16.png",
                                      "hash": "medium_computer_keyboard_in_front_of_Alps_8276bb03_3711_4c2e_9f47_33aa60f7e545_aa7e842a16",
                                      "mime": "image/png",
                                      "name": "medium_computer_keyboard_in_front_of_Alps_8276bb03-3711-4c2e-9f47-33aa60f7e545.png",
                                      "path": null,
                                      "size": 1276.73,
                                      "width": 750,
                                      "height": 750
                                  },
                                  "thumbnail": {
                                      "ext": ".png",
                                      "url": "/uploads/thumbnail_computer_keyboard_in_front_of_Alps_8276bb03_3711_4c2e_9f47_33aa60f7e545_aa7e842a16.png",
                                      "hash": "thumbnail_computer_keyboard_in_front_of_Alps_8276bb03_3711_4c2e_9f47_33aa60f7e545_aa7e842a16",
                                      "mime": "image/png",
                                      "name": "thumbnail_computer_keyboard_in_front_of_Alps_8276bb03-3711-4c2e-9f47-33aa60f7e545.png",
                                      "path": null,
                                      "size": 65.9,
                                      "width": 156,
                                      "height": 156
                                  }
                              },
                              "hash": "computer_keyboard_in_front_of_Alps_8276bb03_3711_4c2e_9f47_33aa60f7e545_aa7e842a16",
                              "ext": ".png",
                              "mime": "image/png",
                              "size": 521.95,
                              "url": "/uploads/computer_keyboard_in_front_of_Alps_8276bb03_3711_4c2e_9f47_33aa60f7e545_aa7e842a16.png",
                              "previewUrl": null,
                              "provider": "local",
                              "provider_metadata": null,
                              "createdAt": "2023-03-01T09:03:17.435Z",
                              "updatedAt": "2023-03-01T09:39:17.483Z"
                          }
                      }
                  ]
              },
              "Parameters": {
                  "id": 1,
                  "inches": 13,
                  "color": "black"
              },
              "categories": {
                  "data": [
                      {
                          "id": 1,
                          "attributes": {
                              "name": "Laptops",
                              "createdAt": "2023-03-01T08:40:31.908Z",
                              "updatedAt": "2023-03-01T09:09:03.284Z",
                              "publishedAt": "2023-03-01T08:40:34.619Z",
                              "locale": "en"
                          }
                      },
                      {
                          "id": 3,
                          "attributes": {
                              "name": "Gaming laptops",
                              "createdAt": "2023-03-01T08:42:28.239Z",
                              "updatedAt": "2023-03-01T09:09:47.858Z",
                              "publishedAt": "2023-03-01T08:42:30.516Z",
                              "locale": "en"
                          }
                      }
                  ]
              },
              "localizations": {
                  "data": []
              }
          },
      },
      hostUrl: "http://localhost:1337"
    },
};
