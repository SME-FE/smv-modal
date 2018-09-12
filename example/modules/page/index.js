/** example in pure js file **/
import Modal from '@/index.js';
import ModalContent from 'example/components/test/ModalContent.vue';

const ConfirmDelModal = Modal({
  title: 'Confirm Delete?',
  className: 'hallo-world',
  modalStyle: {
    width: '400px',
    height: '240px',
  },
  content: ModalContent,
});

const mockRequest = () => {};

export const delItemAction = async id => {
  const resp = await ConfirmDelModal.show();
  mockRequest(`/del/${id}`);
};
