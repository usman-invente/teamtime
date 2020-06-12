<template>
  <div>
    <div>
      <div class="top-header">
        <div class="container">
          <div class="row">
            <div class="col">
              <ul class="user-grid">
                <li><i class="fa fa-user"></i></li>
                <li><i class="fa fa-plus"></i></li>
              </ul>
            </div>
            <div class="col-md-auto">
              <div class="search-grid">
                <input type="text" placeholder="Search teams, players, playgrounds"/>
              </div>
            </div>
            <div class="col col-lg-2" style="text-align: right;">
              <img src="@/assets/images/Logo.png"/>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 content-detail-section">
            <div class="content-detail">
              <div class="row">
                <div class="col-sm-6">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div class="col-sm-6 content-upload-section">
                  <p><i class="fa fa-lock" aria-hidden="true"></i> TeamName 1</p>
                </div>
              </div>
              <hr/>
              <div class="row">
                <div class="col-sm-6">
                  <button class="more-detail">More Details</button>
                </div>
                <div class="col-sm-6">
                  <button class="players">players 17 <i class="fa fa-users" aria-hidden="true"></i></button>
                </div>
                <img class="foot-ball" src="@/assets/images/foot-ball.png"/>
              </div>
            </div>
          </div>
          <div class="col-sm-6 content-upload-section">
            <div class="content-upload">
              <div class="row">
                <div class="col-sm-8">
                  <ul>
                    <li>Herzeliya <i class="fa fa-map-marker" aria-hidden="true"></i></li>
                    <li>Male <i class="fa fa-male" aria-hidden="true"></i></li>
                    <li>24</li>
                    <li>Sagi Hatan</li>
                  </ul>
                  <hr/>
                </div>
                <div class="col-sm-8">
                  <p> Hey, I’m Sagi and I love football & swimming, Easy going guy who always up for sport! Hope to meet nice people!</p>
                </div>
              </div>
              <div class="images-forms">
                <form method="post" id="image-form">
                  <input type="file" name="img[]" class="file" accept="image/*">
                  <div class="input-group-append">
                    <i class="fa fa-plus browse"></i>
                  </div>
                </form>
                <div class="border-image">
                  <img src="@/assets/images/Rectangle 2.png" id="preview" class="img-thumbnail">
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 content-detail-sec-section">
            <div class="content-detail mt-0">
              <div class="row">
                <div class="col-sm-6">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div class="col-sm-6">
                  <p><i class="fa fa-lock" aria-hidden="true"></i> TeamName 1</p>
                </div>
              </div>
              <hr/>
              <div class="row">
                <div class="col-sm-6">
                  <button class="more-detail">More Details</button>
                </div>
                <div class="col-sm-6">
                  <button class="players">players 17 <i class="fa fa-users" aria-hidden="true"></i></button>
                </div>
                <img class="foot-ball" src="@/assets/images/ball.png"/>
              </div>
            </div>
          </div>
          <div class="col-sm-6 image-gallery-section">
            <div class="image-gallery ">
              <p>Photo</p>
              <div class="row">
                <figure class="col-md-3">

                  <img alt="picture" src="@/assets/images/Rectangle 2.png" class="img-fluid"/>

                </figure>
                <figure class="col-md-3">

                  <img alt="picture" src="@/assets/images/Rectangle 2.1.png" class="img-fluid" />

                </figure>
                <figure class="col-md-3">

                  <img alt="picture" src="@/assets/images/Rectangle 2.1 (1).png" class="img-fluid" />

                </figure>
                <figure class="col-md-3">

                  <img alt="picture" src="@/assets/images/Rectangle 2.1 (2).png" class="img-fluid" />

                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <i class="fa fa-paper-plane" aria-hidden="true"></i>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'HelloWorld',

  }
</script>


