<template>
    <div id="demo">
        <!-- BEGIN PAGE HEAD-->
        <div class="page-head">
            <!-- BEGIN PAGE TITLE -->
            <div class="page-title">
                <h1>Tabs, Accordions & Navs
                    <small>metronic and bootstrap custom navbars, tabs, pills, accordions and resizable tabs based on bootstrap-tabdrop plugin</small>
                </h1>
            </div>
            <!-- END PAGE TITLE -->
            <!-- BEGIN PAGE TOOLBAR -->
            <div class="page-toolbar">
                <!-- BEGIN THEME PANEL -->
                <!-- <themeSetting></themeSetting> -->
                <!-- END THEME PANEL -->
            </div>
            <!-- END PAGE TOOLBAR -->
        </div>
        <!-- END PAGE HEAD-->
        <!-- BEGIN PAGE BASE CONTENT -->
        <div class="row">
            <div class="col-md-6">
                <div class="portlet light bordered">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="icon-social-dribbble font-purple-soft"></i>
                            <span class="caption-subject font-purple-soft bold uppercase">Default Tabs</span>
                        </div>
                        <div class="actions">
                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                <i class="icon-cloud-upload"></i>
                            </a>
                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                <i class="icon-wrench"></i>
                            </a>
                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                <i class="icon-trash"></i>
                            </a>
                        </div>
                    </div>
                    <div class="portlet-body">
                        <ul class="nav nav-tabs">
                            <li class="active">
                                <a href="#tab_1_1" data-toggle="tab"> Home </a>
                            </li>
                            <li>
                                <a href="#tab_1_2" data-toggle="tab"> Profile </a>
                            </li>
                            <li class="dropdown">
                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"> Dropdown
                                                    <i class="fa fa-angle-down"></i>
                                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li>
                                        <a href="#tab_1_3" tabindex="-1" data-toggle="tab"> Option 1 </a>
                                    </li>
                                    <li>
                                        <a href="#tab_1_4" tabindex="-1" data-toggle="tab"> Option 2 </a>
                                    </li>
                                    <li>
                                        <a href="#tab_1_3" tabindex="-1" data-toggle="tab"> Option 3 </a>
                                    </li>
                                    <li>
                                        <a href="#tab_1_4" tabindex="-1" data-toggle="tab"> Option 4 </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade active in" id="tab_1_1">
                                <p> Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                                    dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. </p>
                            </div>
                            <div class="tab-pane fade" id="tab_1_2">
                                <p> Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui
                                    photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna
                                    velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui
                                    sapiente accusamus tattooed echo park. </p>
                            </div>
                            <div class="tab-pane fade" id="tab_1_3">
                                <p> Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore
                                    carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.
                                    Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr. </p>
                            </div>
                            <div class="tab-pane fade" id="tab_1_4">
                                <p> Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high
                                    life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical.
                                    Wolf salvia freegan, sartorial keffiyeh echo park vegan. </p>
                            </div>
                        </div>
                        <div class="clearfix margin-bottom-20"> </div>
                        <ul class="nav nav-tabs tabs-reversed">
                            <li class="active">
                                <a href="#tab_reversed_1_1" data-toggle="tab"> Home </a>
                            </li>
                            <li>
                                <a href="#tab_reversed_1_2" data-toggle="tab"> Profile </a>
                            </li>
                            <li class="dropdown">
                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"> Dropdown
                                                    <i class="fa fa-angle-down"></i>
                                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li>
                                        <a href="#tab_reversed_1_3" tabindex="-1" data-toggle="tab"> Option 1 </a>
                                    </li>
                                    <li>
                                        <a href="#tab_reversed_1_4" tabindex="-1" data-toggle="tab"> Option 2 </a>
                                    </li>
                                    <li>
                                        <a href="#tab_reversed_1_3" tabindex="-1" data-toggle="tab"> Option 3 </a>
                                    </li>
                                    <li>
                                        <a href="#tab_reversed_1_4" tabindex="-1" data-toggle="tab"> Option 4 </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade active in" id="tab_reversed_1_1">
                                <p> Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                                    dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. </p>
                            </div>
                            <div class="tab-pane fade" id="tab_reversed_1_2">
                                <p> Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui
                                    photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna
                                    velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui
                                    sapiente accusamus tattooed echo park. </p>
                            </div>
                            <div class="tab-pane fade" id="tab_reversed_1_3">
                                <p> Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore
                                    carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.
                                    Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr. </p>
                            </div>
                            <div class="tab-pane fade" id="tab_reversed_1_4">
                                <p> Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high
                                    life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical.
                                    Wolf salvia freegan, sartorial keffiyeh echo park vegan. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="portlet light bordered">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="icon-bubble font-green-sharp"></i>
                            <span class="caption-subject font-green-sharp bold uppercase">Default Pills</span>
                        </div>
                        <div class="actions">
                            <div class="btn-group">
                                <a class="btn green-haze btn-outline btn-circle btn-sm" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
                                                    <i class="fa fa-angle-down"></i>
                                                </a>
                                <ul class="dropdown-menu pull-right">
                                    <li>
                                        <a href="javascript:;"> Option 1</a>
                                    </li>
                                    <li class="divider"> </li>
                                    <li>
                                        <a href="javascript:;">Option 2</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">Option 3</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">Option 4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="portlet-body">
                        <ul class="nav nav-pills">
                            <li class="active">
                                <a href="#tab_2_1" data-toggle="tab"> Home </a>
                            </li>
                            <li>
                                <a href="#tab_2_2" data-toggle="tab"> Profile </a>
                            </li>
                            <li class="dropdown">
                                <a href="javascript:;" id="myTabDrop1" class="dropdown-toggle" data-toggle="dropdown"> Dropdown
                                                    <i class="fa fa-angle-down"></i>
                                                </a>
                                <ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop1">
                                    <li>
                                        <a href="#tab_2_3" tabindex="-1" data-toggle="tab"> Option 1 </a>
                                    </li>
                                    <li>
                                        <a href="#tab_2_4" tabindex="-1" data-toggle="tab"> Option 2 </a>
                                    </li>
                                    <li>
                                        <a href="#tab_2_3" tabindex="-1" data-toggle="tab"> Option 3 </a>
                                    </li>
                                    <li>
                                        <a href="#tab_2_4" tabindex="-1" data-toggle="tab"> Option 4 </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade active in" id="tab_2_1">
                                <p> Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                                    dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. </p>
                            </div>
                            <div class="tab-pane fade" id="tab_2_2">
                                <p> Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui
                                    photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna
                                    velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui
                                    sapiente accusamus tattooed echo park. </p>
                            </div>
                            <div class="tab-pane fade" id="tab_2_3">
                                <p> Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore
                                    carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.
                                    Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr. </p>
                            </div>
                            <div class="tab-pane fade" id="tab_2_4">
                                <p> Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high
                                    life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical.
                                    Wolf salvia freegan, sartorial keffiyeh echo park vegan. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="portlet light bordered">
                    <div class="portlet-title">
                        <div class="caption">
                            <span class="caption-subject font-grey-salsa bold uppercase">Below Tabs</span>
                        </div>
                        <div class="actions">
                            <div class="actions">
                                <a href="javascript:;" class="btn btn-circle btn-default">
                                    <i class="fa fa-pencil"></i> Edit </a>
                                <a href="javascript:;" class="btn btn-circle btn-default">
                                    <i class="fa fa-plus"></i> Add </a>
                            </div>
                        </div>
                    </div>
                    <div class="portlet-body tabs-below">
                        <div class="tab-content">
                            <div class="tab-pane active" id="tab_3_1">
                                <p> Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                                    dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. </p>
                            </div>
                            <div class="tab-pane fade" id="tab_3_2">
                                <p> Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui
                                    photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna
                                    velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui
                                    sapiente accusamus tattooed echo park. </p>
                            </div>
                            <div class="tab-pane fade" id="tab_3_3">
                                <p> Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore
                                    carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.
                                    Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr. </p>
                            </div>
                            <div class="tab-pane fade" id="tab_3_4">
                                <p> Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high
                                    life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical.
                                    Wolf salvia freegan, sartorial keffiyeh echo park vegan. </p>
                            </div>
                        </div>
                        <ul class="nav nav-tabs">
                            <li class="active">
                                <a href="#tab_3_1" data-toggle="tab"> Home </a>
                            </li>
                            <li>
                                <a href="#tab_3_2" data-toggle="tab"> Profile </a>
                            </li>
                            <li class="dropdown dropup">
                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"> Dropdown
                                                    <i class="fa fa-angle-up"></i>
                                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li>
                                        <a href="#tab_3_3" tabindex="-1" data-toggle="tab"> Option 1 </a>
                                    </li>
                                    <li>
                                        <a href="#tab_3_4" tabindex="-1" data-toggle="tab"> Option 2 </a>
                                    </li>
                                    <li>
                                        <a href="#tab_3_3" tabindex="-1" data-toggle="tab"> Option 3 </a>
                                    </li>
                                    <li>
                                        <a href="#tab_3_4" tabindex="-1" data-toggle="tab"> Option 4 </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="portlet box red">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="fa fa-gift"></i>Below Pills </div>
                        <div class="tools">
                            <a href="javascript:;" class="collapse"> </a>
                            <a href="#portlet-config" data-toggle="modal" class="config"> </a>
                        </div>
                    </div>
                    <div class="portlet-body tabs-below">
                        <div class="tab-content">
                            <div class="tab-pane active" id="tab_4_1">
                                <p> Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                                    dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. </p>
                            </div>
                            <div class="tab-pane fade" id="tab_4_2">
                                <p> Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui
                                    photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna
                                    velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui
                                    sapiente accusamus tattooed echo park. </p>
                            </div>
                            <div class="tab-pane fade" id="tab_4_3">
                                <p> Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore
                                    carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.
                                    Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr. </p>
                            </div>
                            <div class="tab-pane fade" id="tab_4_4">
                                <p> Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high
                                    life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical.
                                    Wolf salvia freegan, sartorial keffiyeh echo park vegan. </p>
                            </div>
                        </div>
                        <ul class="nav nav-pills">
                            <li class="active">
                                <a href="#tab_4_1" data-toggle="tab"> Home </a>
                            </li>
                            <li>
                                <a href="#tab_4_2" data-toggle="tab"> Profile </a>
                            </li>
                            <li class="dropdown dropup">
                                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"> Dropdown
                                                    <i class="fa fa-angle-up"></i>
                                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li>
                                        <a href="#tab_4_3" tabindex="-1" data-toggle="tab"> Option 1 </a>
                                    </li>
                                    <li>
                                        <a href="#tab_4_4" tabindex="-1" data-toggle="tab"> Option 2 </a>
                                    </li>
                                    <li>
                                        <a href="#tab_4_3" tabindex="-1" data-toggle="tab"> Option 3 </a>
                                    </li>
                                    <li>
                                        <a href="#tab_4_4" tabindex="-1" data-toggle="tab"> Option 4 </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="portlet box blue">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="fa fa-gift"></i>Left Tabs </div>
                        <div class="tools">
                            <a href="javascript:;" class="collapse"> </a>
                            <a href="#portlet-config" data-toggle="modal" class="config"> </a>
                        </div>
                    </div>
                    <div class="portlet-body">
                        <div class="row">
                            <div class="col-md-3 col-sm-3 col-xs-3">
                                <ul class="nav nav-tabs tabs-left">
                                    <li class="active">
                                        <a href="#tab_6_1" data-toggle="tab"> Home </a>
                                    </li>
                                    <li>
                                        <a href="#tab_6_2" data-toggle="tab"> Profile </a>
                                    </li>
                                    <li class="dropdown">
                                        <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"> More
                                                            <i class="fa fa-angle-down"></i>
                                                        </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li>
                                                <a href="#tab_6_3" tabindex="-1" data-toggle="tab"> Option 1 </a>
                                            </li>
                                            <li>
                                                <a href="#tab_6_4" tabindex="-1" data-toggle="tab"> Option 2 </a>
                                            </li>
                                            <li>
                                                <a href="#tab_6_3" tabindex="-1" data-toggle="tab"> Option 3 </a>
                                            </li>
                                            <li>
                                                <a href="#tab_6_4" tabindex="-1" data-toggle="tab"> Option 4 </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#tab_6_1" data-toggle="tab"> Settings </a>
                                    </li>
                                    <li>
                                        <a href="#tab_6_1" data-toggle="tab"> More </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-9 col-sm-9 col-xs-9">
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tab_6_1">
                                        <p> Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                                            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. </p>
                                    </div>
                                    <div class="tab-pane fade" id="tab_6_2">
                                        <p> Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.
                                            Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr,
                                            vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher
                                            vero sint qui sapiente accusamus tattooed echo park. </p>
                                    </div>
                                    <div class="tab-pane fade" id="tab_6_3">
                                        <p> Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
                                            locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro
                                            mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr. </p>
                                    </div>
                                    <div class="tab-pane fade" id="tab_6_4">
                                        <p> Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf
                                            cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft
                                            beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="portlet box green">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="fa fa-gift"></i>Right Tabs </div>
                        <div class="tools">
                            <a href="javascript:;" class="collapse"> </a>
                            <a href="#portlet-config" data-toggle="modal" class="config"> </a>
                        </div>
                    </div>
                    <div class="portlet-body">
                        <div class="row">
                            <div class="col-md-9 col-sm-9 col-xs-9">
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tab_7_1">
                                        <p> Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                                            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. </p>
                                    </div>
                                    <div class="tab-pane fade" id="tab_7_2">
                                        <p> Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.
                                            Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr,
                                            vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher
                                            vero sint qui sapiente accusamus tattooed echo park. </p>
                                    </div>
                                    <div class="tab-pane fade" id="tab_7_3">
                                        <p> Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
                                            locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro
                                            mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr. </p>
                                    </div>
                                    <div class="tab-pane fade" id="tab_7_4">
                                        <p> Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf
                                            cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft
                                            beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-3 col-xs-3">
                                <ul class="nav nav-tabs tabs-right">
                                    <li class="active">
                                        <a href="#tab_7_1" data-toggle="tab"> Home </a>
                                    </li>
                                    <li>
                                        <a href="#tab_7_2" data-toggle="tab"> Profile </a>
                                    </li>
                                    <li class="dropdown">
                                        <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"> More
                                                            <i class="fa fa-angle-down"></i>
                                                        </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li>
                                                <a href="#tab_7_3" tabindex="-1" data-toggle="tab"> Option 1 </a>
                                            </li>
                                            <li>
                                                <a href="#tab_7_4" tabindex="-1" data-toggle="tab"> Option 2 </a>
                                            </li>
                                            <li>
                                                <a href="#tab_7_3" tabindex="-1" data-toggle="tab"> Option 3 </a>
                                            </li>
                                            <li>
                                                <a href="#tab_7_4" tabindex="-1" data-toggle="tab"> Option 4 </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#tab_7_1" data-toggle="tab"> Settings </a>
                                    </li>
                                    <li>
                                        <a href="#tab_7_1" data-toggle="tab"> More </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="portlet box yellow">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="fa fa-gift"></i>Styled Tabs </div>
                        <div class="tools">
                            <a href="javascript:;" class="collapse"> </a>
                            <a href="#portlet-config" data-toggle="modal" class="config"> </a>
                        </div>
                    </div>
                    <div class="portlet-body">
                        <h3>Default Tab</h3>
                        <div class="tabbable-line">
                            <ul class="nav nav-tabs ">
                                <li class="active">
                                    <a href="#tab_15_1" data-toggle="tab"> Section 1 </a>
                                </li>
                                <li>
                                    <a href="#tab_15_2" data-toggle="tab"> Section 2 </a>
                                </li>
                                <li>
                                    <a href="#tab_15_3" data-toggle="tab"> Section 3 </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active" id="tab_15_1">
                                    <p> I'm in Section 1. </p>
                                    <p> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
                                        autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. </p>
                                </div>
                                <div class="tab-pane" id="tab_15_2">
                                    <p> Howdy, I'm in Section 2. </p>
                                    <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Ut
                                        wisi enim ad minim veniam, quis nostrud exerci tation. </p>
                                    <p>
                                        <a class="btn green" href="ui_tabs_accordions_navs.html#tab_15_2" target="_blank"> Activate this tab via URL </a>
                                    </p>
                                </div>
                                <div class="tab-pane" id="tab_15_3">
                                    <p> Howdy, I'm in Section 3. </p>
                                    <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                                        in hendrerit in vulputate velit esse molestie consequat </p>
                                    <p>
                                        <a class="btn yellow" href="ui_tabs_accordions_navs.html#tab_15_3" target="_blank"> Activate this tab via URL </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h3>Below Tab</h3>
                        <div class="tabbable-line tabs-below">
                            <div class="tab-content">
                                <div class="tab-pane active" id="tab_16_2_1">
                                    <p> I'm in Section 1. </p>
                                    <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. </p>
                                    <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat dolor
                                        in hendrerit in vulputate velit esse molestie consequat. </p>
                                </div>
                                <div class="tab-pane" id="tab_16_2_2">
                                    <p> Howdy, I'm in Section 2. </p>
                                    <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                                        in hendrerit in vulputate velit esse molestie consequat. </p>
                                    <p>
                                        <a class="btn yellow" href="ui_tabs_accordions_navs.html#tab_16_2_2" target="_blank"> Activate this tab via URL </a>
                                    </p>
                                </div>
                                <div class="tab-pane" id="tab_16_2_3">
                                    <p> Howdy, I'm in Section 3. </p>
                                    <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Duis
                                        autem vel eum iriure dolor in hendrerit in vulputate. </p>
                                    <p>
                                        <a class="btn purple" href="ui_tabs_accordions_navs.html#tab_16_2_3" target="_blank"> Activate this tab via URL </a>
                                    </p>
                                </div>
                            </div>
                            <ul class="nav nav-tabs">
                                <li class="active">
                                    <a href="#tab_16_2_1" data-toggle="tab"> Section 1 </a>
                                </li>
                                <li>
                                    <a href="#tab_16_2_2" data-toggle="tab"> Section 2 </a>
                                </li>
                                <li>
                                    <a href="#tab_16_2_3" data-toggle="tab"> Section 3 </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="portlet box yellow">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="fa fa-gift"></i>Styled Tabs #2 </div>
                        <div class="tools">
                            <a href="javascript:;" class="collapse"> </a>
                            <a href="#portlet-config" data-toggle="modal" class="config"> </a>
                        </div>
                    </div>
                    <div class="portlet-body">
                        <div class="tabbable-custom ">
                            <ul class="nav nav-tabs ">
                                <li class="active">
                                    <a href="#tab_5_1" data-toggle="tab"> Section 1 </a>
                                </li>
                                <li>
                                    <a href="#tab_5_2" data-toggle="tab"> Section 2 </a>
                                </li>
                                <li>
                                    <a href="#tab_5_3" data-toggle="tab"> Section 3 </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active" id="tab_5_1">
                                    <p> I'm in Section 1. </p>
                                    <p> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
                                        autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. </p>
                                </div>
                                <div class="tab-pane" id="tab_5_2">
                                    <p> Howdy, I'm in Section 2. </p>
                                    <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Ut
                                        wisi enim ad minim veniam, quis nostrud exerci tation. </p>
                                    <p>
                                        <a class="btn green" href="ui_tabs_accordions_navs.html#tab_5_2" target="_blank"> Activate this tab via URL </a>
                                    </p>
                                </div>
                                <div class="tab-pane" id="tab_5_3">
                                    <p> Howdy, I'm in Section 3. </p>
                                    <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                                        in hendrerit in vulputate velit esse molestie consequat </p>
                                    <p>
                                        <a class="btn yellow" href="ui_tabs_accordions_navs.html#tab_5_3" target="_blank"> Activate this tab via URL </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="tabbable-custom tabs-below">
                            <div class="tab-content">
                                <div class="tab-pane active" id="tab_6_2_1">
                                    <p> I'm in Section 1. </p>
                                    <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. </p>
                                    <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat dolor
                                        in hendrerit in vulputate velit esse molestie consequat. </p>
                                </div>
                                <div class="tab-pane" id="tab_6_2_2">
                                    <p> Howdy, I'm in Section 2. </p>
                                    <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                                        in hendrerit in vulputate velit esse molestie consequat. </p>
                                    <p>
                                        <a class="btn yellow" href="ui_tabs_accordions_navs.html#tab_6_2_2" target="_blank"> Activate this tab via URL </a>
                                    </p>
                                </div>
                                <div class="tab-pane" id="tab_6_2_3">
                                    <p> Howdy, I'm in Section 3. </p>
                                    <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Duis
                                        autem vel eum iriure dolor in hendrerit in vulputate. </p>
                                    <p>
                                        <a class="btn purple" href="ui_tabs_accordions_navs.html#tab_6_2_3" target="_blank"> Activate this tab via URL </a>
                                    </p>
                                </div>
                            </div>
                            <ul class="nav nav-tabs">
                                <li class="active">
                                    <a href="#tab_6_2_1" data-toggle="tab"> Section 1 </a>
                                </li>
                                <li>
                                    <a href="#tab_6_2_2" data-toggle="tab"> Section 2 </a>
                                </li>
                                <li>
                                    <a href="#tab_6_2_3" data-toggle="tab"> Section 3 </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <!-- BEGIN TAB PORTLET-->
                <div class="portlet light bordered">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="icon-anchor font-green-sharp"></i>
                            <span class="caption-subject font-green-sharp bold uppercase">Tab drop</span>
                        </div>
                        <div class="actions">
                            <div class="btn-group">
                                <a class="btn green-haze btn-outline btn-circle btn-sm" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
                                                    <i class="fa fa-angle-down"></i>
                                                </a>
                                <ul class="dropdown-menu pull-right">
                                    <li>
                                        <a href="javascript:;"> Option 1</a>
                                    </li>
                                    <li class="divider"> </li>
                                    <li>
                                        <a href="javascript:;">Option 2</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">Option 3</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">Option 4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="portlet-body">
                        <p> Basic exemple. Resize the window to see how the tabs are moved into the dropdown </p>
                        <div class="tabbable tabbable-tabdrop">
                            <ul class="nav nav-tabs">
                                <li class="active">
                                    <a href="#tab1" data-toggle="tab">Section 1</a>
                                </li>
                                <li>
                                    <a href="#tab2" data-toggle="tab">Section 2</a>
                                </li>
                                <li>
                                    <a href="#tab3" data-toggle="tab">Section 3</a>
                                </li>
                                <li>
                                    <a href="#tab4" data-toggle="tab">Section 4</a>
                                </li>
                                <li>
                                    <a href="#tab5" data-toggle="tab">Section 5</a>
                                </li>
                                <li>
                                    <a href="#tab6" data-toggle="tab">Section 6</a>
                                </li>
                                <li>
                                    <a href="#tab7" data-toggle="tab">Section 7</a>
                                </li>
                                <li>
                                    <a href="#tab8" data-toggle="tab">Section 8</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active" id="tab1">
                                    <p> I'm in Section 1. </p>
                                </div>
                                <div class="tab-pane" id="tab2">
                                    <p> Howdy, I'm in Section 2. </p>
                                </div>
                                <div class="tab-pane" id="tab3">
                                    <p> Howdy, I'm in Section 3. </p>
                                </div>
                                <div class="tab-pane" id="tab4">
                                    <p> Howdy, I'm in Section 4. </p>
                                </div>
                                <div class="tab-pane" id="tab5">
                                    <p> Howdy, I'm in Section 5. </p>
                                </div>
                                <div class="tab-pane" id="tab6">
                                    <p> Howdy, I'm in Section 6. </p>
                                </div>
                                <div class="tab-pane" id="tab7">
                                    <p> Howdy, I'm in Section 7. </p>
                                </div>
                                <div class="tab-pane" id="tab8">
                                    <p> Howdy, I'm in Section 8. </p>
                                </div>
                                <div class="tab-pane" id="tab9">
                                    <p> Howdy, I'm in Section 9. </p>
                                </div>
                            </div>
                        </div>
                        <p> &nbsp; </p>
                        <p> &nbsp; </p>
                        <div class="tabbable tabbable-tabdrop">
                            <ul class="nav nav-pills">
                                <li class="active">
                                    <a href="#tab11" data-toggle="tab">Section 1</a>
                                </li>
                                <li>
                                    <a href="#tab12" data-toggle="tab">Section 2</a>
                                </li>
                                <li>
                                    <a href="#tab13" data-toggle="tab">Section 3</a>
                                </li>
                                <li>
                                    <a href="#tab14" data-toggle="tab">Section 4</a>
                                </li>
                                <li>
                                    <a href="#tab15" data-toggle="tab">Section 5</a>
                                </li>
                                <li>
                                    <a href="#tab16" data-toggle="tab">Section 6</a>
                                </li>
                                <li>
                                    <a href="#tab17" data-toggle="tab">Section 7</a>
                                </li>
                                <li>
                                    <a href="#tab18" data-toggle="tab">Section 8</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active" id="tab11">
                                    <p> I'm in Section 1. </p>
                                </div>
                                <div class="tab-pane" id="tab12">
                                    <p> Howdy, I'm in Section 2. </p>
                                </div>
                                <div class="tab-pane" id="tab13">
                                    <p> Howdy, I'm in Section 3. </p>
                                </div>
                                <div class="tab-pane" id="tab14">
                                    <p> Howdy, I'm in Section 4. </p>
                                </div>
                                <div class="tab-pane" id="tab15">
                                    <p> Howdy, I'm in Section 5. </p>
                                </div>
                                <div class="tab-pane" id="tab16">
                                    <p> Howdy, I'm in Section 6. </p>
                                </div>
                                <div class="tab-pane" id="tab17">
                                    <p> Howdy, I'm in Section 7. </p>
                                </div>
                                <div class="tab-pane" id="tab18">
                                    <p> Howdy, I'm in Section 8. </p>
                                </div>
                                <div class="tab-pane" id="tab19">
                                    <p> Howdy, I'm in Section 9. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END TAB PORTLET-->
                <!-- BEGIN TAB PORTLET-->
                <div class="portlet light bordered">
                    <div class="portlet-title tabbable-line">
                        <div class="caption">
                            <i class="icon-share font-dark"></i>
                            <span class="caption-subject font-dark bold uppercase">Portlet Tabs</span>
                        </div>
                        <ul class="nav nav-tabs">
                            <li>
                                <a href="#portlet_tab3" data-toggle="tab"> Tab 3 </a>
                            </li>
                            <li>
                                <a href="#portlet_tab2" data-toggle="tab"> Tab 2 </a>
                            </li>
                            <li class="active">
                                <a href="#portlet_tab1" data-toggle="tab"> Tab 1 </a>
                            </li>
                        </ul>
                    </div>
                    <div class="portlet-body">
                        <div class="tab-content">
                            <div class="tab-pane active" id="portlet_tab1">
                                <p> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent. </p>
                                <div class="alert alert-warning">
                                    <p> There is a known issue where the dropdown menu appears to be a clipping if it placed in tabbed content. By far there is no flaxible fix for this issue as per discussion here:
                                        <a target="_blank" href="https://github.com/twitter/bootstrap/issues/3661">
                                                        https://github.com/twitter/bootstrap/issues/3661 </a>
                                    </p>
                                    <p> But you can check out the below dropdown menu. Don't worry it won't get chopped out by the tab content. Instead it will be opened as dropup menu </p>
                                </div>
                                <div class="btn-group">
                                    <a class="btn purple" href="javascript:;" data-toggle="dropdown">
                                        <i class="fa fa-user"></i> Settings
                                        <i class="fa fa-angle-down"></i>
                                    </a>
                                    <ul class="dropdown-menu bottom-up">
                                        <li>
                                            <a href="javascript:;">
                                                <i class="fa fa-plus"></i> Add </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <i class="fa fa-trash-o"></i> Edit </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <i class="fa fa-times"></i> Delete </a>
                                        </li>
                                        <li class="divider"> </li>
                                        <li>
                                            <a href="javascript:;"> Full Settings </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="tab-pane" id="portlet_tab2">
                                <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                    kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                    At vero eos et accusam et justo. </p>
                                <p>
                                    <a class="btn red" href="ui_tabs_accordions_navs.html#portlet_tab2" target="_blank"> Activate this tab via URL </a>
                                </p>
                            </div>
                            <div class="tab-pane" id="portlet_tab3">
                                <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                                    dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
                                <p>
                                    <a class="btn blue" href="ui_tabs_accordions_navs.html#portlet_tab3" target="_blank"> Activate this tab via URL </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END TAB PORTLET-->
                <!-- BEGIN TAB PORTLET-->
                <div class="portlet light bordered">
                    <div class="portlet-title tabbable-line">
                        <div class="caption">
                            <i class="icon-share font-dark"></i>
                            <span class="caption-subject font-dark bold uppercase">Portlet Tabs</span>
                        </div>
                        <ul class="nav nav-tabs">
                            <li>
                                <a href="#portlet_tab2_3" data-toggle="tab"> Tab 3 </a>
                            </li>
                            <li>
                                <a href="#portlet_tab2_2" data-toggle="tab"> Tab 2 </a>
                            </li>
                            <li class="active">
                                <a href="#portlet_tab2_1" data-toggle="tab"> Tab 1 </a>
                            </li>
                        </ul>
                    </div>
                    <div class="portlet-body">
                        <div class="tab-content">
                            <div class="tab-pane active" id="portlet_tab2_1">
                                <div class="alert alert-success"> Check out the below dropdown menu. It will be opened as usual since there is enough space at the bottom. </div>
                                <div class="btn-group margin-bottom-10">
                                    <a class="btn red" href="javascript:;" data-toggle="dropdown">
                                        <i class="fa fa-user"></i> Settings
                                        <i class="fa fa-angle-down"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="javascript:;">
                                                <i class="fa fa-plus"></i> Add </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <i class="fa fa-trash-o"></i> Edit </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <i class="fa fa-times"></i> Delete </a>
                                        </li>
                                        <li class="divider"> </li>
                                        <li>
                                            <a href="javascript:;"> Full Settings </a>
                                        </li>
                                    </ul>
                                </div>
                                <p> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
                                    augue duis dolore te feugait. </p>
                                <p> Deros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                                    ut laoreet dolore magna. consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. </p>
                            </div>
                            <div class="tab-pane" id="portlet_tab2_2">
                                <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                    kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                    At vero eos et accusam et justo. </p>
                                <p>
                                    <a class="btn red" href="ui_tabs_accordions_navs.html#portlet_tab2_2" target="_blank"> Activate this tab via URL </a>
                                </p>
                            </div>
                            <div class="tab-pane" id="portlet_tab2_3">
                                <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                                    dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
                                <p>
                                    <a class="btn purple" href="ui_tabs_accordions_navs.html#portlet_tab2_3" target="_blank"> Activate this tab via URL </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END TAB PORTLET-->
                <!-- BEGIN ACCORDION PORTLET-->
                <div class="portlet box green">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="fa fa-gift"></i>Accordions </div>
                        <div class="tools">
                            <a href="javascript:;" class="collapse"> </a>
                            <a href="#portlet-config" data-toggle="modal" class="config"> </a>
                            <a href="javascript:;" class="reload"> </a>
                            <a href="javascript:;" class="remove"> </a>
                        </div>
                    </div>
                    <div class="portlet-body">
                        <div class="panel-group accordion" id="accordion1">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse_1"> Collapsible Group Item #1 </a>
                                    </h4>
                                </div>
                                <div id="collapse_1" class="panel-collapse in">
                                    <div class="panel-body">
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse_2"> Collapsible Group Item #2 </a>
                                    </h4>
                                </div>
                                <div id="collapse_2" class="panel-collapse collapse">
                                    <div class="panel-body" style="height:200px; overflow-y:auto;">
                                        <p> 111111Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        </p>
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p>
                                            <a class="btn blue" href="ui_tabs_accordions_navs.html#collapse_2" target="_blank"> Activate this section via URL </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse_3"> Collapsible Group Item #3 </a>
                                    </h4>
                                </div>
                                <div id="collapse_3" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                            moon tempor. </p>
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p>
                                            <a class="btn green" href="ui_tabs_accordions_navs.html#collapse_3" target="_blank"> Activate this section via URL </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#collapse_4"> Collapsible Group Item #4 </a>
                                    </h4>
                                </div>
                                <div id="collapse_4" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                            moon tempor. </p>
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p>
                                            <a class="btn red" href="ui_tabs_accordions_navs.html#collapse_4" target="_blank"> Activate this section via URL </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END ACCORDION PORTLET-->
                <!-- BEGIN ACCORDION PORTLET-->
                <div class="portlet box yellow">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="fa fa-gift"></i>Accordions with Icons </div>
                        <div class="tools">
                            <a href="javascript:;" class="collapse"> </a>
                            <a href="#portlet-config" data-toggle="modal" class="config"> </a>
                            <a href="javascript:;" class="reload"> </a>
                            <a href="javascript:;" class="remove"> </a>
                        </div>
                    </div>
                    <div class="portlet-body">
                        <div class="panel-group accordion" id="accordion3">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a class="accordion-toggle accordion-toggle-styled" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_1"> Collapsible Group Item #1 </a>
                                    </h4>
                                </div>
                                <div id="collapse_3_1" class="panel-collapse in">
                                    <div class="panel-body">
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a class="accordion-toggle accordion-toggle-styled collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_2"> Collapsible Group Item #2 </a>
                                    </h4>
                                </div>
                                <div id="collapse_3_2" class="panel-collapse collapse">
                                    <div class="panel-body" style="height:200px; overflow-y:auto;">
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        </p>
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p>
                                            <a class="btn blue" href="ui_tabs_accordions_navs.html#collapse_3_2" target="_blank"> Activate this section via URL </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a class="accordion-toggle accordion-toggle-styled collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_3"> Collapsible Group Item #3 </a>
                                    </h4>
                                </div>
                                <div id="collapse_3_3" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                            moon tempor. </p>
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p>
                                            <a class="btn green" href="ui_tabs_accordions_navs.html#collapse_3_3" target="_blank"> Activate this section via URL </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a class="accordion-toggle accordion-toggle-styled collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_4"> Collapsible Group Item #4 </a>
                                    </h4>
                                </div>
                                <div id="collapse_3_4" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                            moon tempor. </p>
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p>
                                            <a class="btn red" href="ui_tabs_accordions_navs.html#collapse_3_4" target="_blank"> Activate this section via URL </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END ACCORDION PORTLET-->
                <!-- BEGIN ACCORDION PORTLET-->
                <div class="portlet box purple">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="fa fa-gift"></i>Scrollable Accordions </div>
                        <div class="tools">
                            <a href="javascript:;" class="collapse"> </a>
                            <a href="#portlet-config" data-toggle="modal" class="config"> </a>
                            <a href="javascript:;" class="reload"> </a>
                            <a href="javascript:;" class="remove"> </a>
                        </div>
                    </div>
                    <div class="portlet-body">
                        <div class="panel-group accordion scrollable" id="accordion2">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse_2_1"> Collapsible Group Item #1 </a>
                                    </h4>
                                </div>
                                <div id="collapse_2_1" class="panel-collapse in">
                                    <div class="panel-body">
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse_2_2"> Collapsible Group Item #2 </a>
                                    </h4>
                                </div>
                                <div id="collapse_2_2" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                        </p>
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p>
                                            <a class="btn blue" href="ui_tabs_accordions_navs.html#collapse_2_2" target="_blank"> Activate this section via URL </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse_2_3"> Collapsible Group Item #3 </a>
                                    </h4>
                                </div>
                                <div id="collapse_2_3" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                            moon tempor. </p>
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p>
                                            <a class="btn green" href="ui_tabs_accordions_navs.html#collapse_2_3" target="_blank"> Activate this section via URL </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse_2_4"> Collapsible Group Item #4 </a>
                                    </h4>
                                </div>
                                <div id="collapse_2_4" class="panel-collapse collapse">
                                    <div class="panel-body">
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                            moon tempor. </p>
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p>
                                            <a class="btn red" href="ui_tabs_accordions_navs.html#collapse_2_4" target="_blank"> Activate this section via URL </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END ACCORDION PORTLET-->
                <div class="portlet box blue">
                    <div class="portlet-title">
                        <div class="caption">
                            <i class="fa fa-gift"></i>Styled Tabs(justified) </div>
                        <div class="tools">
                            <a href="javascript:;" class="collapse"> </a>
                            <a href="#portlet-config" data-toggle="modal" class="config"> </a>
                        </div>
                    </div>
                    <div class="portlet-body">
                        <div class="tabbable-custom nav-justified">
                            <ul class="nav nav-tabs nav-justified">
                                <li class="active">
                                    <a href="#tab_1_1_1" data-toggle="tab"> Section 1 </a>
                                </li>
                                <li>
                                    <a href="#tab_1_1_2" data-toggle="tab"> Section 2 </a>
                                </li>
                                <li>
                                    <a href="#tab_1_1_3" data-toggle="tab"> Section 3 </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active" id="tab_1_1_1">
                                    <p> I'm in Section 1. </p>
                                    <p> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
                                        autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. </p>
                                </div>
                                <div class="tab-pane" id="tab_1_1_2">
                                    <p> Howdy, I'm in Section 2. </p>
                                    <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Ut
                                        wisi enim ad minim veniam, quis nostrud exerci tation. </p>
                                    <p>
                                        <a class="btn green" href="ui_tabs_accordions_navs.html#tab_1_1_2" target="_blank"> Activate this tab via URL </a>
                                    </p>
                                </div>
                                <div class="tab-pane" id="tab_1_1_3">
                                    <p> Howdy, I'm in Section 3. </p>
                                    <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                                        in hendrerit in vulputate velit esse molestie consequat </p>
                                    <p>
                                        <a class="btn yellow" href="ui_tabs_accordions_navs.html#tab_1_1_3" target="_blank"> Activate this tab via URL </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="tabbable-custom tabs-below nav-justified">
                            <div class="tab-content">
                                <div class="tab-pane active" id="tab_17_1">
                                    <p> I'm in Section 1. </p>
                                    <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. </p>
                                    <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat dolor
                                        in hendrerit in vulputate velit esse molestie consequat. </p>
                                </div>
                                <div class="tab-pane" id="tab_17_2">
                                    <p> Howdy, I'm in Section 2. </p>
                                    <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                                        in hendrerit in vulputate velit esse molestie consequat. </p>
                                    <p>
                                        <a class="btn yellow" href="ui_tabs_accordions_navs.html#tab_17_2" target="_blank"> Activate this tab via URL </a>
                                    </p>
                                </div>
                                <div class="tab-pane" id="tab_17_3">
                                    <p> Howdy, I'm in Section 3. </p>
                                    <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Duis
                                        autem vel eum iriure dolor in hendrerit in vulputate. </p>
                                    <p>
                                        <a class="btn purple" href="ui_tabs_accordions_navs.html#tab_17_3" target="_blank"> Activate this tab via URL </a>
                                    </p>
                                </div>
                            </div>
                            <ul class="nav nav-tabs nav-justified">
                                <li class="active">
                                    <a href="#tab_17_1" data-toggle="tab"> Section 1 </a>
                                </li>
                                <li>
                                    <a href="#tab_17_2" data-toggle="tab"> Section 2 </a>
                                </li>
                                <li>
                                    <a href="#tab_17_3" data-toggle="tab"> Section 3 </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END PAGE BASE CONTENT -->
    </div>
</template>

<script>
    export default {
        name: "demo"
    }
</script>

<style>

</style>