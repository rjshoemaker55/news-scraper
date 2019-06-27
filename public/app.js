$('.save-btn').on('click', function() {

    $(this).css("background", "maroon")
    $(this).css("color", "tan")

    const storyId = $(this).attr('data-id')
    console.log(storyId)

    $.ajax({
        method: "POST",
        url: '/savestory/' + storyId
    })
})

$('.unsave-btn').on('click', function() {

    $(this).css("background", "maroon")
    $(this).css("color", "tan")

    const storyId = $(this).attr('data-id')
    console.log(storyId)

    $.ajax({
        method: "POST",
        url: '/unsavestory/' + storyId
    })
})