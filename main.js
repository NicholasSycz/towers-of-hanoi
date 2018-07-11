$(document).ready(function() {
  var selectedBlock;
  var selectedBlocksContainerId;
//	var initBlockContainer = $('.container').data('container-id')
  $('.container').on('click', function() {


    var containerId = $(this).data('container-id');

    if (!selectedBlock) {
      selectedBlock = $(this).find('.block:first-child')
      selectedBlock.toggleClass('block--selected');
      selectedBlocksContainerId = selectedBlock.closest('.container').data('container-id');
    } else {
      selectedBlock.toggleClass('block--selected');
    }

    console.log(selectedBlock, containerId, selectedBlocksContainerId)

    if (selectedBlock && containerId !== selectedBlocksContainerId) {

      if ($(this).find('.block').length > 0) {
        var containersBlockId = $(this).find('.block:nth-child(1)').data('block-id')
        console.log('hellp')

        var detachedBlockId = selectedBlock.data('block-id');

        if (detachedBlockId > containersBlockId) {
          alert('Illegal Move');
        } else {
          var detachedBlock = selectedBlock.detach();
          $(this).find('.blocks-container').prepend(detachedBlock);
          selectedBlock = null;

        }

      } else {
        var detachedBlock = selectedBlock.detach();
        $(this).find('.blocks-container').append(detachedBlock);
      }
			      if ($('#win').children().length >= 3) {
      	alert('Winner winner! Chicken dinner!')
        
      }

      selectedBlock = null;

    }

  });


});

